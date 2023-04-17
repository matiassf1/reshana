import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import { ConceptCard } from "./components/ConceptCard";
import { motion, AnimatePresence } from "framer-motion";

const { TextArea } = Input;

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const App = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState([]);

  const handleSummarize = async () => {
    const fetching = await fetch("http://localhost:3000/cards", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await fetching.json();

    setSummary(data);

    localStorage.setItem('cards', JSON.stringify(data));
  };

  return (
    <div>
      <motion.h1
        style={{ textAlign: "center" }}
        initial="initial"
        animate="animate"
        variants={variants}
        exit="exit"
      >
        Resumir texto
      </motion.h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          style={{ width: "50%", paddingRight: "10px" }}
          initial="initial"
          animate="animate"
          variants={variants}
          exit="exit"
        >
          <TextArea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí el texto a resumir"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "15px",
            }}
          >
            <Button
              type="primary"
              onClick={handleSummarize}
              disabled={text?.length < 40}
            >
              Resumir
            </Button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {summary && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            exit="exit"
          >
            <h2>Resumen:</h2>
            {summary.map((card, index) => (
              <ConceptCard
                key={index}
                title={`Concepto numero ${index}`}
                concept={card}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
