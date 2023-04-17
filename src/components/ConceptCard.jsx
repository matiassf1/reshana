import { Card } from 'antd';

export const ConceptCard = ({ title, concept }) => {
  return (
    <Card
      title={title}
      bordered={false}
      style={{
        background: 'linear-gradient(45deg, #B721FF 0%, #21D4FD 100%)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        borderRadius: '16px',
        color: '#fff',
        padding: '24px',
        margin:"30px"
      }}
    >
      <p style={{ fontSize: '18px', lineHeight: '30px', margin: 0 }}>
        {concept}
      </p>
    </Card>
  );
};

