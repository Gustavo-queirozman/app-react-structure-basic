import React from "react";

class Forgout extends React.Component {
  render() {
    return (
      <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div class="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            Esqueci minha senha
        </h2>

        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              placeholder="example@email.com"
            />
          </div>

          <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Enviar
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-600">
          Não possui uma conta?
          <a
            href="/register"
            class="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Cadastrar
          </a>
        </div>
      </div>
    </div>
    );
  }
}
export default Forgout;
