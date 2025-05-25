// utils.js
// src/utils.js

export function logVisit(data) {
  try {
    fetch("https://us-central1-stripepay-3c918.cloudfunctions.net/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error("Erro ao registrar visita:", e);
  }
}

export function getBasicLogData() {
  return {
    timestamp: new Date().toISOString(),
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    page: window.location.href,
  };
}

// ✅ Função para incrementar valor numérico no sessionStorage
export function incrementarCliquesCheckout(chave, campo, incremento = 1) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  const valorAtual = typeof dados[campo] === "number" ? dados[campo] : 0;
  dados[campo] = valorAtual + incremento;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

export function incrementarRespostasQuiz(chave, campo, incremento = 1) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  const valorAtual = typeof dados[campo] === "number" ? dados[campo] : 0;
  dados[campo] = valorAtual + incremento;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

// ✅ Função para salvar dados no sessionStorage
export function salvarDados(chave, campo, valor) {
  const dados = JSON.parse(sessionStorage.getItem(chave)) || {};
  dados[campo] = valor;
  sessionStorage.setItem(chave, JSON.stringify(dados));
}

// ✅ Função para registrar logs de ações
export function registrarLog(chave, acao, detalhes) {
  try {
    // Recupera os dados completos da chave
    let dados = JSON.parse(sessionStorage.getItem(chave)) || {};

    // Garante que a subchave "logs" seja um array
    if (!Array.isArray(dados.logs)) {
      dados.logs = [];
    }

    // Adiciona o novo log ao array "logs"
    dados.logs.push({ acao, detalhes });

    // Salva novamente no sessionStorage
    sessionStorage.setItem(chave, JSON.stringify(dados));
    console.log("🟢 Log registrado com sucesso:", { acao, detalhes });
  } catch (error) {
    console.error("❌ Erro ao registrar log:", error);
  }
}

// ✅ Função para enviar logs
// ✅ Função para enviar logs de múltiplas chaves
export function enviarLogs(...chaves) {
  const hiperLogs = {};

  chaves.forEach((chave) => {
    const logs = JSON.parse(sessionStorage.getItem(chave));
    if (logs) {
      hiperLogs[chave] = logs;
      sessionStorage.removeItem(chave);
    }
  });

  if (Object.keys(hiperLogs).length > 0) {
    const url = "https://us-central1-stripepay-3c918.cloudfunctions.net/logs";
    enviarComBeaconOuFetch(url, { hiperLogs });
  } else {
    console.warn("⚠️ Nenhum log encontrado para as chaves fornecidas.");
  }
}

// ✅ Função para obter e salvar parâmetros da URL
export function obterSalvarParametrosUrl(chave) {
  const params = new URLSearchParams(window.location.search);
  const parametros = {};

  params.forEach((valor, chave) => {
    if (chave.startsWith("utm_") || chave === "ref" || chave === "source") {
      parametros[chave] = valor;
    }
  });

  if (Object.keys(parametros).length > 0) {
    salvarDados(chave, "parametrosEntrada", parametros);
    console.log("🟢 Parâmetros capturados e salvos:", parametros);
  } else {
    console.log("⚠️ Nenhum parâmetro relevante encontrado na URL.");
  }
}

// ✅ Função para criar payload para enviar eventos
export function criarPayload(eventName, valor, produtos, eventId, form = {}) {
  const email = form.email || "";
  const telefone = form.celular || "";

  return {
    email,
    telefone,
    valor,
    produtos,
    eventName,
    eventId,
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    eventSourceUrl: window.location.href,
    eventTime: Math.floor(Date.now() / 1000),
  };
}

// ✅ Função para enviar evento para o Pixel
export function enviarEventoPixel(eventName, valor, produtos, form) {
  const eventId = `${eventName}_${Date.now()}_${Math.random()
    .toString(36)
    .substring(2, 8)}`;

  fbq("track", eventName, {
    content_ids: produtos,
    value: valor,
    currency: "BRL",
    eventID: eventId,
  });

  const url = "https://us-central1-stripepay-3c918.cloudfunctions.net/api/capi";
  const payload = criarPayload(eventName, valor, produtos, eventId, form);

  enviarComBeaconOuFetch(url, payload);
  return eventId;
}

// ✅ Função para obter cookies
export function getCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function enviarComBeaconOuFetch(url, payload) {
  try {
    // Tenta enviar com sendBeacon se suportado
    if (typeof navigator.sendBeacon === "function") {
      const sent = navigator.sendBeacon(
        url,
        new Blob([JSON.stringify(payload)], { type: "application/json" })
      );
      if (sent) {
        console.log("🟢 Dados enviados com sendBeacon:", payload);
        return true;
      } else {
        console.warn(
          "❌ Falha ao enviar com sendBeacon. Tentando com fetch..."
        );
      }
    }
    // Fallback para fetch com keepalive
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((response) => {
        if (response.ok) {
          console.log("✅ Dados enviados com fetch:", payload);
        } else {
          console.error("❌ Falha no envio com fetch:", response.statusText);
        }
      })
      .catch((err) => {
        console.error("❌ Erro ao enviar com fetch:", err);
      });
    return false;
  } catch (error) {
    console.error("❌ Erro na função de envio:", error);
    return false;
  }
}
