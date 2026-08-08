# Barbearia Buenos Aires

Site institucional e de agendamento da Barbearia Buenos Aires — corte de cabelo e sobrancelha na Rua Quirino de Andrade, 165, São Paulo - SP.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`, tokens em `src/index.css`)
- shadcn/ui (Radix UI + `class-variance-authority`)
- Framer Motion (animações)
- Zustand (estado do agendamento)
- date-fns (datas em pt-BR)

## Instalação e execução

Pré-requisitos: [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173` (ou na próxima porta livre).

### Build de produção

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`, pronta para deploy (ex. Vercel, sem configuração adicional).

## Agendamento

O módulo de agendamento (seção "Marque seu horário") gera horários simulados no
frontend com base no serviço e na duração escolhidos — a barbearia não possui
sistema de agenda real. Ver `src/lib/slots.ts`. Ao confirmar, uma mensagem
pronta é enviada via WhatsApp para `(11) 96375-5999`; o horário só é
confirmado de fato pelo barbeiro na conversa.

## Itens pendentes de confirmação com o cliente

- Horário de funcionamento real (atualmente placeholder: Segunda a Sábado, 09:00–19:00)
- Instagram / redes sociais
- Fotos reais do ambiente e dos barbeiros (Nadson e Gringo)
- Serviços adicionais além de corte e sobrancelha (barba, degradê, etc.)
- Duração real de cada serviço (assumido: 30 min corte, 10 min sobrancelha)
