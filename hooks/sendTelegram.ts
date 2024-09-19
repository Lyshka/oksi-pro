import axios from "axios";

export const sendTelegram = async (message: string) => {
  try {
    const {
      data: { ok },
    } = await axios.post<{ ok: boolean }>(
      "https://api.telegram.org/bot7736570861:AAGyVE50jmoyek559u2BzhVh0NIEnoAMIBk/sendMessage",
      {
        chat_id: -4596484068,
        text: message,
        parse_mode: "html",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return ok;
  } catch (error) {
    console.error(error);
  }
};
