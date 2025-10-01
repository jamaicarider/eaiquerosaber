"use client";
import { useState, useEffect } from "react";
import { Box, Button, Typography, Modal, Avatar, Grid, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface Depoimento {
  nome: string;
  texto: string;
  estrelas: number;
  foto: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: "HENRI O CASADO",
    texto: "É com imensa gratidão que venho compartilhar através dessa mensagem o contentamento com os serviços de amizades com Lucas Henrique, ótimo padrinho, skatista, guitarrista e tchola, indico com todo prazer seus serviços cujo alguns não poderei pronunciar o tipo a carta aberta 🥵😈, porém ele é um querido! Se precisa de boa companhia e uma pessoa engraçadinha achou a pessoa certa, pare sua procura agora, arraste pra cima e siga seu sonhos disponível por tempo eliminado o boneco Lucas Henrique Beijos de luz",
    estrelas: 5,
    foto: "/henri.jpeg",
  },
  {
    nome: "SONO",
    texto: "venho por meio desta carta prestar meu testemunho sobre meu amigo Luqinhas, pessoa a quem tenho grande admiração e respeito. durante o tempo em que convivemos, pude observar sua conduta íntegra e dagger, sua responsabilidade e seu comprometimento em todas as situações que se apresenta, principalmente quando se trata de tomar cerveja e comer salgadinho num posto.trata-se de alguém confiável, leal e dedicado, sempre disposto a ajudar e a contribuir positivamente no ambiente em que está inserido falando merda atrás de merda para arrancar sorrisos daqueles que estão por perto acredito que qualquer pessoa que venha a conhecê-lo poderá confirmar as qualidades aqui descritas. considero, portanto, uma honra poder falar que sou seu gzinho e parcero de bebedeiras e skatebãr. att, SoNO VAI CORINTHIANS 🦅🖤🤍🖤🤍🦅",
    estrelas: 5,
    foto: "/amigo1.jpeg",
  },
  {
    nome: "XANDECO",
    texto: "tenho o prazer de recitar a palavra cujo direito de imagem é de luquinhas sapeka henrique jovem formal bonito elegante talentoso flip de from menino sério envolvente que nos diverte, malemolência pura degustador de brejas e tocador de guitarras sincero lealdade pura e ruim de sinuca honra para todos nós Gzinhos colar com esse Gzinho incrível VAI CORINTHIANS 🦅🖤🤍🖤🤍🦅 ass-xandeco",
    estrelas: 4,
    foto: "/amigo2.jpeg",
  },
  {
    nome: "VINI GATAO",
    texto: "Bah, luKinhas é um cara massa. Gente fina, amigo parceiro pros rolês, famoso “Bora?”, “Bora!”. Além de querido é mó gato, lembra o Childish Gambino. Hmmm, delícia 😋",
    estrelas: 5,
    foto: "/vini.png",
  },
];

export default function HomePage() {
  const [openSim, setOpenSim] = useState(false);
  const [openNao, setOpenNao] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Tenta tocar música automaticamente
  useEffect(() => {
    const audioEl = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audioEl) {
      audioEl.volume = 0.5;
      audioEl.play().then(() => setPlaying(true)).catch(() => {
        console.log("Autoplay bloqueado, clique no ícone para tocar a música.");
      });
    }
  }, []);

  const togglePlay = () => {
    const audioEl = document.getElementById("bg-audio") as HTMLAudioElement;
    if (!audioEl) return;
    if (playing) {
      audioEl.pause();
      setPlaying(false);
    } else {
      audioEl.play().then(() => setPlaying(true)).catch(() => console.log("Erro ao tocar música"));
    }
  };

  return (
    <Box sx={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      <audio id="bg-audio" src="/musica.mp3" loop />

      {/* Player fixo estilo Tumblr */}
      <Box
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "rgba(0,0,0,0.5)",
          px: 2,
          py: 1,
          borderRadius: "30px",
          zIndex: 9999,
        }}
      >
        <IconButton onClick={togglePlay} sx={{ color: "white" }}>
          {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>

        <Box sx={{ display: "flex", gap: "3px", height: "20px" }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Box
              key={i}
              sx={{
                width: "3px",
                height: playing ? `${5 + i * 4}px` : "5px",
                bgcolor: "limegreen",
                animation: playing ? "equalize 0.5s ease-in-out infinite alternate" : "none",
                "@keyframes equalize": {
                  from: { height: "5px" },
                  to: { height: `${10 + i * 6}px` },
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: "50vh",
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "#fff", textShadow: "3px 3px 15px rgba(0,0,0,0.7)" }}>
          Is this our Central Park or not?
        </Typography>
      </Box>

      <Box
  sx={{
    width: "100%",
    height: "50vh",
    position: "relative",
    bgcolor: "#000", // cor de fundo caso a imagem não carregue
    backgroundImage: "url('/minhaImagem.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
<Box
  sx={{
    width: "100%",
    height: "50vh",
    position: "relative",
    bgcolor: "#000", // cor de fundo caso a imagem não carregue
    backgroundImage: "url('/pensativo.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  <Typography variant="h4" sx={{ color: "#fff", textShadow: "2px 2px 10px #000" }}>
    Você aceita ficar comigo?
  </Typography>
</Box>


        <Button
          variant="contained"
          onClick={() => setOpenSim(true)}
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "35%",
            transform: "translateX(-50%)",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            bgcolor: "rgba(255,255,255,0.3)",
            color: "#000",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
          }}
        >
          Sim
        </Button>

        <Button
          variant="contained"
          onClick={() => setOpenNao(true)}
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "65%",
            transform: "translateX(-50%)",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            bgcolor: "rgba(255,255,255,0.3)",
            color: "#000",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            "&:hover": { bgcolor: "rgba(82,82,82,0.5)" },
          }}
        >
          Não
        </Button>
      </Box>

      {/* Modal SIM */}
      <Modal open={openSim} onClose={() => setOpenSim(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "90%", maxWidth: 400, borderRadius: 2, overflow: "hidden", textAlign: "center" }}>
          <Box sx={{ position: "relative" }}>
            <img src="/sim.jpg" alt="Sim" style={{ width: "100%", display: "block", borderRadius: "10px" }} />
            <Typography variant="h5" sx={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", color: "white", fontWeight: "bold", textShadow: "0px 2px 8px rgba(0,0,0,0.8)" }}>
              Que bom! 😍
            </Typography>
            <Typography sx={{ position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", color: "white", textShadow: "0px 2px 6px rgba(0,0,0,0.7)" }}>
              Estou muito feliz que você disse sim!
            </Typography>
          </Box>
          <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "black", color: "white" }}
          onClick={() => setOpenSim(false)}
          >
          Fechar
          </Button>
        </Box>
      </Modal>

      {/* Modal NÃO */}
      <Modal open={openNao} onClose={() => setOpenNao(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", borderRadius: 2, p: 3, textAlign: "center" }}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <img src="/nao1.jpg" alt="Não 1" style={{ width: "200px", borderRadius: "8px" }} />
            <img src="/nao2.jpg" alt="Não 2" style={{ width: "200px", borderRadius: "8px" }} />
            <img src="/nao3.jpg" alt="Não 3" style={{ width: "200px", borderRadius: "8px" }} />
          </Box>
          <Button sx={{ mt: 2, background: "black", color: "white", }} variant="contained" onClick={() => setOpenNao(false)}>Fechar</Button>
        </Box>
      </Modal>

      {/* Depoimentos */}
      <Box sx={{ py: 6, px: 4, bgcolor: "#000" }}>
        <Typography variant="h4" fontWeight="bold" mb={4} textAlign="center" color="white">
          Depoimentos dos Guri
        </Typography>
        <Grid container spacing={4}>
          {depoimentos.map((d, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box sx={{ p: 3, borderRadius: 3, bgcolor: "rgba(77,77,77,0.8)", backdropFilter: "blur(8px)", boxShadow: "0px 4px 15px rgba(0,0,0,0.1)", textAlign: "center", color: "white", wordBreak: "break-word" }}>
                <Avatar src={d.foto} alt={d.nome} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
                <Typography fontWeight="bold">{d.nome}</Typography>
                <Typography sx={{ mb: 1 }}>{d.texto}</Typography>
                <Typography sx={{ color: "#FFD700", fontSize: "1.1rem" }}>
                  {"★".repeat(d.estrelas) + "☆".repeat(5 - d.estrelas)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
