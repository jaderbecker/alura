module.exports = (req, res) => {
  res.writeHead(302, {
    'Location': 'https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_TELEFONE'
  });
  res.end();
};
