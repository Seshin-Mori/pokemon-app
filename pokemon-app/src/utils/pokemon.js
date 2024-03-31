export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        // エラーハンドリングのための.catchメソッドを追加することも考慮してください
        reject(error);
      });
  });
};
