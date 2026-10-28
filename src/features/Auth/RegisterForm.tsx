import { useState, type FormEvent } from "react";
import { Input } from "../../shared/ui/Input";
import Button from "../../shared/ui/Button/Button";

type Props = {
  onSwitchToLogin: () => void;
  onClose: () => void;
};

export default function RegisterForm({ onSwitchToLogin, onClose }: Props) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Register:", { login, email, password });
    onClose();
  };

  return (
    <div className="bg-white rounded-3xl p-8 w-full max-w-[280px] sm:max-w-[320px] shadow-2xl">
      <h2 className="font-sfprosemi text-xl sm:text-2xl mb-2">Регистрация</h2>
      <p className="font-sfpro text-sm text-gray-600 mb-6">
        Введите данные для регистрации
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          type="submit"
          variant="signIn"
          className="w-full mt-2"
        >
          Зарегистрироваться
        </Button>

        <button
          type="button"
          className="bg-[#F0F0F0] rounded-3xl py-3 font-sfprosemi text-base"
          onClick={onSwitchToLogin}
        >
          Войти
        </button>
      </form>
    </div>
  );
}
