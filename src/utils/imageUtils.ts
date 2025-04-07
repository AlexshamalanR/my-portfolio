export const getImagePath = (imageName: string) => {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? `/my-portfolio/images/${imageName}` : `/images/${imageName}`;
} 