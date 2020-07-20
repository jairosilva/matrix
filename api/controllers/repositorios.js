var rp = require("request-promise");

exports.getRepositorios = (req, res, next) => {

  const linguagem = req.params.linguagem;
  const pagina = req.params.pagina;
  const itensPorPagina = req.params.itensPorPagina;

  var options = {
    uri: "https://api.github.com/search/repositories?q=language:" + linguagem + '&page=' + pagina + '&per_page=' + itensPorPagina,
    headers: {
      "User-Agent": "Matrix",
    },
    json: true,
  };

  rp(options)
    .then(function (repos) {
      res.status(200).json(repos);
    })
    .catch(function (err) {
      console.log(err);
    });
};
