const port = process.env.PORT || 3030;
const start = () => console.log(`starting server at port ${port}`);

module.exports = { port, start };