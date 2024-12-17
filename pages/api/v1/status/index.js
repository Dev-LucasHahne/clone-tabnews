function status(request, response) {
  response.status(200).json({ Status: "OK!" });
}

export default status;
