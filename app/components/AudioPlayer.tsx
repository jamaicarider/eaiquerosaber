"use client";
import { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/musica.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  return (
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

      {/* Barrinhas animadas estilo equalizador */}
      <Box sx={{ display: "flex", gap: "3px", height: "20px" }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Box
            key={i}
            sx={{
              width: "3px",
              height: playing ? `${5 + i * 4}px` : "5px",
              bgcolor: "limegreen",
              animation: playing
                ? "equalize 0.5s ease-in-out infinite alternate"
                : "none",
              "@keyframes equalize": {
                from: { height: "5px" },
                to: { height: `${10 + i * 6}px` },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
