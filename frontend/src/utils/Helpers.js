export const shuffled = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }
  
  export const randomSize = () => {
    const sizes = ["small", "medium", "large"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
  
  export const randomBoxColor = () => {
    const colors = [
      "#000000", // Hitam
      "#333333", // Abu-abu gelap
      "#555555", // Abu-abu
      "#FF0000", // Merah
      "#FF6600", // Jingga
      "#0000FF", // Biru
      "#CC00FF", // Ungu
      "#FF00FF", // Magenta
      "#990000", // Merah gelap
      "#993300", // Cokelat
      "#996600", // Kuning kecokelatan
      "#006600", // Hijau gelap
      "#006666", // Biru kehijauan
      "#000099", // Biru gelap
      "#660099", // Ungu gelap
      "#990099", // Ungu kecokelatan
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  