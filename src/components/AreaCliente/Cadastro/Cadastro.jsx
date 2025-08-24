import React from "react";
import "./Cadastro.css";
import InputMask from "react-input-mask";

const Cadastro = () => {
  return (
    <div className="content">
      <div className="form-area-register">
        <div className="box-register">
          <h1>Cadastre-se</h1>
          <form className="register-form">
            <div class="form-group">
              <label for="formGroupExampleInput">Nome</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="nome completo"
                required
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Endereço</label>
              <div className="block-inputs">
                {/* <label htmlFor="rua" className="end-2">
                  Rua
                </label> */}
                <input
                  type="text"
                  class="form-control"
                  id="end-rua"
                  placeholder="nome da rua"
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  id="end-number"
                  placeholder="nº."
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  id="end-bairro"
                  placeholder="bairro"
                  required
                />
              </div>
              <br />
              <div className="block-inputs">
                <input
                  type="text"
                  class="form-control"
                  id="end-cidade"
                  placeholder="cidade"
                  required
                />
                <select
                  class="form-control"
                  name="uf"
                  id="end-estado"
                  required="required">
                  <option value="">selecione estado </option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espirito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
                <InputMask
                  class="form-control"
                  mask="99999-999"
                  placeholder="cep"
                  id="end-cep"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="contacts">Contato</label>
              <div className="block-inputs">
                <InputMask
                  class="form-control"
                  mask="(99)99999-9999"
                  placeholder="telefone 1"
                  id="end-phone"
                  required
                />
                <InputMask
                  class="form-control"
                  mask="(99)99999-9999"
                  placeholder="telefone 2"
                  id="end-phone"
                />
                <input
                  type="email"
                  class="form-control"
                  id="end-mail"
                  placeholder="e-mail"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">
                Crie seu usuário com 8 a 15 caracteres
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="usuário"
                required
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Crie sua senha:</label>
              <input
                type="password"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="mínimo 8 caracteres"
                required
              />
              <small>
                Sua senha deve atender aos seguintes requisitos: <br />* Conter
                entre 8 e 20 caracteres; <br />* Incluir pelo menos 1 letra
                maiúscula; <br />* Incluir pelo menos 1 letra minúscula; <br />*
                Incluir pelo menos 1 número; <br />* Incluir pelo menos 1
                caractere especial (ex.: ! @ # $ % & *). <br />
                Evite usar informações pessoais óbvias (como nome ou data de
                nascimento).
              </small>
            </div>
            <div id="btn-register">
              <button type="submit" class="btn btn-primary mb-2">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
