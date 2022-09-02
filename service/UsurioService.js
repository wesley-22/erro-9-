'use strict';


/**
 * Permite alterar a senha do login
 *
 * login String 
 * senha String 
 * nova_senha String 
 * returns inline_response_200_7
 **/
exports.usuarioCredenciaisPATCH = function(login,senha,nova_senha) {
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
 *
 * id Integer ID única do usuário.
 * no response value expected for this operation
 **/
exports.usuarioIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna os dados de usuário.
 *
 * id Integer ID do funcionario
 * returns inline_response_200
 **/
exports.usuarioIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 0,
  "nome" : "Nome do Usuário"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Usuario_body  (optional)
 * id Integer ID do funcionário
 * email String e-mail do usuário. (optional)
 * telefone Integer telefone do usuário. (optional)
 * whatsapp Boolean caso o telefone seja do whatsapp. (optional)
 * oauthgoogle String oauth do usuário. (optional)
 * oauthhotmail String oauth do usuário. (optional)
 * nome String nome do usuário. (optional)
 * no response value expected for this operation
 **/
exports.usuarioIdPATCH = function(body,id,email,telefone,whatsapp,oauthgoogle,oauthhotmail,nome) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * cadastra um novo usuário.
 *
 * no response value expected for this operation
 **/
exports.usuarioPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

