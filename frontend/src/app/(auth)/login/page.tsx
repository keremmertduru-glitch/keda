import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-surface-border bg-surface p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Giriş Yap</h1>
          <p className="text-sm text-zinc-400">
            KEDA asistanınıza erişmek için hesap bilgilerinizi girin.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none text-zinc-300">
                E-posta Adresi
              </label>
              <Input id="email" type="email" placeholder="ornek@ogrenci.edu.tr" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium leading-none text-zinc-300">
                  Şifre
                </label>
                <Link href="#" className="text-sm font-medium text-primary hover:underline transition-all">
                  Şifremi unuttum
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Sisteme Giriş Yap
          </Button>
        </form>
        <div className="text-center text-sm text-zinc-400">
          Henüz hesabınız yok mu?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline transition-all">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}