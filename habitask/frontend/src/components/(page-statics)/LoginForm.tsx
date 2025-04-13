import React from 'react'
//TODO: FAZER O LOGIN FICAR À DIREITA E ALGUM TEXTO NA ESQUERDA TIPO MERCADO LIVRE
const LoginForm = () => {
  return (
    <form className="w-full max-w-md space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-[#18181b] border border-[#8c44d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c44d9] text-white"
            placeholder="exemplo@email.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 bg-[#18181b] border border-[#8c44d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8c44d9] text-white"
            placeholder="Sua senha"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#8c44d9] text-white rounded-lg hover:bg-[#6b2db3] transition-colors duration-200"
      >
        Entrar
      </button>
    </form>
  )
}

export default LoginForm