import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';
const { TextArea } = Input;
const { Meta } = Card;


export const App = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    
  };

  return (
    <div>
      <TextArea rows={10} value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="primary" onClick={handleSummarize}>
        Resumir
      </Button>
      {summary && (
        <div>
          <h2>Resumen:</h2>
          <Card title="Concepto 1">
            <Meta description="Definición o explicación del concepto 1." />
          </Card>
          <Card title="Concepto 2">
            <Meta description="Definición o explicación del concepto 2." />
          </Card>
          <Card title="Concepto 3">
            <Meta description="Definición o explicación del concepto 3." />
          </Card>
          {/* Agrega más tarjetas aquí si es necesario */}
        </div>
      )}
    </div>
  );
}
