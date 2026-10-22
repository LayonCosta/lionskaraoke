# Workflow de Cadastro de Novas Músicas - Lions Karaokê

Este documento serve como diretriz obrigatória e instrução de sistema (prompts futuros) para quando o usuário solicitar a postagem de uma nova música no canal **Lions Karaokê**. 

Sempre que o usuário enviar uma mensagem com o formato ou a intenção de:
`Música nova: [Nome da Música] - [Nome do Cantor] + [Letra]`

O assistente deve **rigorosamente** gerar cinco blocos de conteúdo e salvá-los na pasta `LETRAS/`:
1. **Título do Vídeo no YouTube (Foco em SEO)**
2. **Descrição do Vídeo no YouTube (Sem a letra sincronizada - apenas placeholder para letra corrida)**
3. **Comentário Fixado (CTA Estratégico)**
4. **Letra Sincronizada para o Vídeo (Para uso exclusivo do editor de vídeo)**
5. **Versão YouTube Shorts (Trecho curto vertical de até 60 segundos para divulgação)**

---

## ⚠️ Regra Crítica contra Concorrência (Proteção de Conteúdo)

> [!WARNING]
> **NÃO COLOQUE A LETRA SINCRONIZADA/SEPARADA NA DESCRIÇÃO DO YOUTUBE!**
> A separação das linhas de canto e marcação de pausas exige muito esforço do editor. Para evitar que os concorrentes roubem esse trabalho de sincronização, a descrição do YouTube deve ter apenas um placeholder para a letra corrida normal encontrada na internet.
> 
> A letra sincronizada deve existir **apenas** no arquivo `.md` na seção dedicada para o editor copiar, e **nunca** no texto da descrição do YouTube.

---

## 1. Título do Vídeo (YouTube SEO)
O título deve seguir o padrão de máxima relevância para buscas orgânicas de karaokê no YouTube, colocando a intenção de busca e o nome da música logo no início.

*   **Modelo Padrão Obrigatório:**
    `Karaokê [Nome da Música] - [Nome do Cantor] (Profissional | Com Letra)`
*   *Exemplos:*
    - `Karaokê Amada Amante - Roberto Carlos (Profissional | Com Letra)`
    - `Karaokê O Fim da Nossa História - Bokaloka (Profissional | Com Letra)`

---

## 2. Descrição do Vídeo no YouTube (Para colar no YouTube)
*   Use `▇▇▇▇▇▇▇▇▇▇` como separador das seções da descrição (nunca use `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`).
*   Deixe a seção de letra da descrição vazia/com placeholder para letra corrida normal.

### Exemplo de Descrição para o YouTube:
```text
💎 A EMOÇÃO TOMA CONTA! Karaokê com qualidade de estúdio para os verdadeiros fãs.

"Esse amor demais antigo, amor demais amigo..." 🌹 Cante com a alma esse super sucesso de Roberto Carlos!

▇▇▇▇▇▇▇▇▇▇

🔹 QUER SUA MÚSICA AQUI? (SEJA VIP)
Não espere meses na fila de pedidos grátis.
Encomende sua música agora pelo nosso site e receba em até 48h!
👉 Peça pelo Site: https://lionskaraoke.vercel.app

✅ Playback Exclusivo
✅ Prioridade Máxima (Fura-Fila)
✅ Playlist com seu nome no canal

💲 VALOR: R$ 15,00 por música. (Para packs acima de 5 músicas, sai por R$ 10,00 cada!)

COMO PAGAR E PEDIR:
Faça o PIX na chave abaixo.
Envie o comprovante e o nome da música por e-mail ou na mensagem do Pix.

🔑 CHAVE PIX / E-MAIL: layoncosta.digital@gmail.com

▇▇▇▇▇▇▇▇▇▇

🔹 APOIE O CANAL
Este canal não recebe monetização do YouTube devido aos direitos autorais das músicas (reivindicações automáticas). 
Se este karaokê animou a sua festa, o seu churrasco ou o seu dia, nos ajude a manter o projeto ativo com qualquer valor via PIX!
🔑 CHAVE PIX: layoncosta.digital@gmail.com

▇▇▇▇▇▇▇▇▇▇

Ficha Técnica:
Música: Amada Amante
Artista: Roberto Carlos
Qualidade: Áudio Remasterizado 48kHz

Letra:
(Insira a letra corrida normal da internet aqui - Não coloque as quebras do editor!)

#RobertoCarlos #AmadaAmante #JovemGuarda #Karaoke #LionsKaraoke
```

---

## 3. Comentário Fixado (CTA de Engajamento)
Focado em gerar curtidas, engajamento com alguma frase marcante e conversão VIP.

---

## 4. Letra Sincronizada para o Vídeo (Para copiar para o Editor)
Esta seção fica no arquivo `.md` e serve para o editor copiar e colar no programa de vídeo.
*   **Obrigatório:** Todas as letras desta seção devem ser em **LETRAS MAIÚSCULAS** (UPPERCASE) para melhor legibilidade na tela da TV/Celular.
*   **Introdução Obrigatória (CTA de Vendas):** O vídeo deve sempre começar com a seguinte estrutura de introdução para prender a atenção do usuário antes da música começar:
    ```text
    INSCREVA-SE
    ▇▇▇▇▇▇▇▇▇▇
    QUER SUA MÚSICA NO CANAL?
    PEÇA PELO QR CODE DA TELA
    ▇▇▇▇▇▇▇▇▇▇
    ```
*   Linhas curtas separadas pelo tempo do cantor.
*   Pausas longas no meio (solos instrumentais) marcadas com banners semelhantes, ex:
    ```text
    ▇▇▇▇▇
    FAÇA PEDIDOS
    NO QR CODE
    ```
*   **Tela Final Obrigatória (30 Segundos - Doações/Pix):** O final de todo arquivo de letra sincronizada deve conter um bloco de instrução para a tela final de 30 segundos, incentivando o público a escanear o QR Code de doação Pix e se inscrever no canal enquanto as sugestões de vídeos e playlists do YouTube carregam:
    ```text
    ▇▇▇▇▇▇▇▇▇▇
    TELA FINAL (30 SEGUNDOS)
    
    OBRIGADO POR CANTAR COM O LIONS! 🦁🎤
    
    COMO ESSE VÍDEO NÃO É MONETIZADO
    PELOS DIREITOS AUTORAIS DA MÚSICA,
    MANTEMOS O CANAL COM O SEU APOIO.
    
    SE O KARAOKÊ ALEGROU SUA FESTA
    OU O SEU CHURRASCO, AJUDE VIA PIX!
    
    CHAVE PIX / QR CODE NA TELA
    layoncosta.digital@gmail.com
    
    MUITO OBRIGADO! 🙏
    ▇▇▇▇▇▇▇▇▇▇
    ```

---

## 5. Versão YouTube Shorts (Divulgação Vertical de até 60s)
Esta seção serve para criar um vídeo curto em formato vertical (9:16) focando no refrão principal da música para atrair tráfego para o vídeo de karaokê completo no canal.

### Título do Short:
`[Nome da Música] - [Nome do Cantor] (Karaokê) #shorts #karaoke #[Estilo/Gênero] #lionskaraoke`

### Descrição do Short:
```text
Quer cantar a música completa? Clique no link abaixo!
👉 Assista ao Karaokê Completo aqui: [LINK_DO_VIDEO_LONG_FORM]

#lionskaraoke #karaoke #[Cantor] #[NomeDaMusica]
```

### Comentário Fixado do Short (CTA):
```text
🎤 QUER CANTAR A MÚSICA COMPLETA?
👉 Assista ao vídeo completo aqui: [LINK_DO_VIDEO_LONG_FORM]

Se curtiu, se inscreve no canal e deixe seu like! 🦁🔥
```

### Letra Sincronizada para o Short (Apenas o Refrão):
A letra sincronizada deve conter apenas a estrofe/refrão principal da música que será usada no Short de até 60 segundos, toda em **LETRAS MAIÚSCULAS**.


