export interface UsuarioData {
  descricao: string;
  usuario: string;
  senha: string;
  sucesso: boolean;
  mensagemEsperada?: string;
}

export const listaUsuarios: UsuarioData[] = [
  {
    descricao: 'Usuário Válido Standard',
    usuario: 'standard_user',
    senha: 'secret_sauce',
    sucesso: true,
  },
  {
    descricao: 'Usuário Bloqueado (Locked Out)',
    usuario: 'locked_out_user',
    senha: 'secret_sauce',
    sucesso: false,
    mensagemEsperada: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    descricao: 'Senha Incorreta',
    usuario: 'standard_user',
    senha: 'senha_incorreta_123',
    sucesso: false,
    mensagemEsperada: 'Epic sadface: Username and password do not match any user in this service',
  },
];