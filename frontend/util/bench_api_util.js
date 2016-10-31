export const fetchBenches = success => {
  $.ajax({
    url: '/api/benches',
    success,
    error: () => console.log('error')
  });
};
