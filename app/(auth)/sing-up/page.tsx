"use client";
import React from "react";
import { Auth, SignUp } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Box } from "@chakra-ui/react";
import supabase from "@/lib/supabase";
export default function Page() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minH={"90vh"}
    >
      <Box w={"300px"}>
        <SignUp
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          redirectTo="/"
          localization={{
            variables: {
              sign_in: {
                email_label: "Ваш email",
                password_label: "Ваш пароль",
                email_input_placeholder: "Ваш email",
                password_input_placeholder: "Ваш пароль",
                button_label: "Увійти",
                social_provider_text: "Увійти за допомогою",
                link_text: "Уже маєте аккаунт? Увійти",
              },
              sign_up: {
                email_label: "Ваш email",
                password_label: "Ваш пароль",
                email_input_placeholder: "Ваш email",
                password_input_placeholder: "Ваш пароль",
                button_label: "Зареєструватись",
                social_provider_text: "Зареєструватися за допомогою",
                link_text: "Не маєте аккаунт? Зареєструватись",
                confirmation_text: "На ваш email прийшов лист підтвердження",
              },

              magic_link: {
                email_input_label: "Ваш email",
                email_input_placeholder: "Ваш email",
                button_label: "Відправити email",
                link_text: "Send a magic link email",
              },
              forgotten_password: {
                email_label: "Ваш email",
                password_label: "Ваш пароль",
                email_input_placeholder: "Ваш email",
                button_label: "Надіслати новий пароль",
                link_text: "Забули пароль?",
              },
              update_password: {
                password_label: "Ваш новий пароль",
                password_input_placeholder: "Ваш новий пароль",
                button_label: "Оновити пароль",
              },
            },
          }}
        ></SignUp>
      </Box>
    </Box>
  );
}
