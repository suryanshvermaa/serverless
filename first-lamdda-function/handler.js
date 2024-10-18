exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
};
exports.suryansh =async (event)=>{
    const value=JSON.parse(event.body);
    return {
      statusCode : 200,
      body :JSON.stringify({
        hi: value,
        sury:"jkeje"
      })
    }
}
