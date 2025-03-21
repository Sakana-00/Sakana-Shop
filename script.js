letters.forEach(letter => {
    letter.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e;
      letter.style.transform = `translate(${offsetX / 5}px, ${offsetY / 5}px) scale(1.3)`;
  
      // Tetapin warnanya sesuai class highlight
      if (letter.classList.contains('highlight')) {
        letter.style.color = '#FFA500';
      } else {
        letter.style.color = '#00c3ff';
      }
    });
  
    letter.addEventListener('mouseleave', () => {
      letter.style.transform = 'translate(0, 0) scale(1)';
  
      if (letter.classList.contains('highlight')) {
        letter.style.color = '#FFA500';
      } else {
        letter.style.color = '#fff';
      }
    });
  });
  