'use strict';


/**
 * busca os dados da contratação.
 *
 * contratacao_id Integer 
 * returns inline_response_201_1
 **/
exports.contratacoesContratacao_idGET = function(contratacao_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "estado" : "estado",
  "cidade" : "cidade",
  "nome_pai" : "nome_pai",
  "bairro" : "bairro",
  "dt_ctps" : "dt_ctps",
  "cidade_nasc" : "cidade_nasc",
  "estado_nasc" : "estado_nasc",
  "emitente_rg" : "emitente_rg",
  "n_cpf" : "n_cpf",
  "dt_rg" : "dt_rg",
  "n_rg" : "n_rg",
  "n_rua" : "n_rua",
  "nome_mae" : "nome_mae",
  "contratacao_id" : "contratacao_id",
  "n_ctps" : "n_ctps",
  "dt_nasc" : "dt_nasc"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * atualiza o status da contratação
 *
 * contratacao_id Integer 
 * status Boolean 
 * returns inline_response_201
 **/
exports.contratacoesContratacao_idPATCH = function(contratacao_id,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contratacao_id" : 0,
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite o envio dos dados do candidato a ser contratado.
 *
 * chave String 
 * contratacao_id String 
 * returns inline_response_200_1
 **/
exports.contratacoesContratacao_idPOST = function(chave,contratacao_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * busca lista de contratações de uma empresa.
 *
 * cdempresa Integer 
 * returns inline_response_200_6
 **/
exports.contratacoesGET = function(cdempresa) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "0001", "0002", "0003" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona uma nova contratação.
 *
 * returns inline_response_200_1
 **/
exports.contratacoesPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "sucesso"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

