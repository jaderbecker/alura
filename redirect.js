module.exports = (req, res) => {
  res.writeHead(302, {
    'Location': 'https://wa.me/5551998082464?text=Ol%C3%A1%21+Tenho+interesse+e+queria+mais+informa%C3%A7%C3%B5es%2C+por+favor.'
  });
  res.end();
};
