const generateImgURL = async (prompt, colors) => {
    const url = await fetch(
        `https://openai-api-u24k.onrender.com/v49/img/${prompt}/${colors}`
      ).then((res) => res.json());
    return url;
}

export default generateImgURL;