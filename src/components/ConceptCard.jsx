import { Card } from 'antd';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ConceptCard = ({ title, concept }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ margin: '30px' }}
    >
      <Card
        title={title}
        bordered={false}
        style={{
          background: 'linear-gradient(45deg, #B721FF 0%, #21D4FD 100%)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          borderRadius: '16px',
          color: '#fff',
          padding: '24px',
        }}
      >
        <p style={{ fontSize: '18px', lineHeight: '30px', margin: 0 }}>
          {concept}
        </p>
      </Card>
    </motion.div>
  );
};
