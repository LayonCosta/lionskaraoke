# 🎤 Guia de Configuração - Ultimate Vocal Remover (UVR5)
Este guia ensina a extrair a **melhor qualidade possível de áudio instrumental** (removendo a voz do cantor sem deixar resíduos ou artefatos) utilizando o software **UVR5 v5.6.1 Estável**.

---

## ⚙️ 1. Configurações para a Qualidade Máxima

Com base nos menus exibidos nas suas imagens, configure o UVR5 exatamente desta forma para processar suas músicas:

| Campo na Tela | Configuração Recomendada | Descrição / Motivo |
| :--- | :--- | :--- |
| **Formato de Saída** | `WAV` *(Imagem 1)* | **Obrigatório.** O WAV é um formato sem perdas (lossless). Exportar em MP3 comprimiria o áudio novamente, perdendo definição. |
| **Choose Process Method** | `MDX-Net` *(Imagem 1)* | O método MDX-Net é o atual padrão da indústria para separação limpa de Voz vs. Instrumental. |
| **Choose MDX-NET Model** | `MDX23C-InstVoc HQ` *(Imagem 4)* | Este é o modelo nativo mais potente para separar instrumentais com alta fidelidade e sem "vazamento" de voz. |
| **Segment Size** | `Default` *(Imagem 2)* | Mantenha em **Default** (Padrão). O programa ajustará dinamicamente o tamanho do segmento com base no modelo selecionado. |
| **Overlap** | `50` *(Imagem 3)* | **Ajuste Crítico:** O Overlap serve para suavizar a junção dos blocos de áudio. Deixar no valor máximo de **`50`** elimina qualquer estalo ou corte no instrumental. |
| **GPU Conversion** | `[x] Marcado` *(Imagem 1)* | Faz o processamento rodar pela sua placa de vídeo (GPU) em vez de usar o processador (CPU), acelerando o processo. |
| **Vocals / Instrumental Only**| `[ ] Desmarcados` *(Imagem 1)* | Deixe ambos desmarcados. O UVR5 criará **dois arquivos de áudio**: um com os vocais e outro com o instrumental. |

---

## 🚀 2. Dica de Ouro: Como conseguir qualidade ainda maior (Novos Modelos e Roformer)

Como a sua versão **v5.6.1 Estável** possui suporte direto para os modelos Roformer, você pode baixá-los diretamente no Download Center:

### Como Baixar e Configurar o BS-Roformer (Melhor do Mundo):
1. Abra o **Download Center** (chave inglesa -> aba Download Center).
2. Marque a caixinha **`MDX-Net`**.
3. No dropdown de modelos, **role a lista para baixo** até encontrar a seção que começa com `Roformer Model:`.
4. Selecione e baixe o **`Roformer Model: BS-Roformer-Viperx-1297`**.
5. Na tela principal do UVR5, configure desta forma para usá-lo:
   * **Choose Process Method:** `MDX-Net` (os modelos Roformer rodam dentro do método MDX-Net).
   * **Choose MDX-NET Model:** Selecione o `BS-Roformer-Viperx-1297` que você baixou.
   * **Segment Size:** `Default`
   * **Overlap:** Selecione **`50`** (o valor máximo da sua versão para garantir suavidade perfeita).
   * **Vocals / Instrumental Only:** Desmarcados para gerar ambos os áudios.

### Outros Excelentes Modelos para baixar na mesma lista:
* **Kim Inst** *(Marque MDX-Net -> baixe o `Kim Inst` para instrumentais de samba e pagode).*
* **HP2-Karaoke-UVR** *(Marque `VR Arch` -> baixe o `HP2-Karaoke-UVR` para remover backing vocals).*
* **UVR-DeEcho-DeReverb** *(Marque `VR Arch` -> baixe para tirar o eco da voz original).*

---

## 🛠️ 3. O que fazer se a música ainda ficar com "ruídos" de voz?

Se a música original tiver muitos efeitos na voz (reverb/delay), o modelo principal pode deixar alguns "fantasmas" de voz no instrumental. Para resolver isso:

1. **Ative o Ensemble Mode:** No menu **Choose Process Method** *(Imagem 2)*, selecione **`Ensemble Mode`**.
2. Na tela que aparecer, você poderá selecionar **dois ou mais modelos** para trabalharem juntos (ex: escolha o `MDX23C-InstVoc HQ` e o `UVR-MDX-NET Inst HQ 3`).
3. O UVR5 irá processar a música com ambos os modelos e fazer uma média inteligente das partes limpas de cada um, gerando um instrumental praticamente perfeito.
