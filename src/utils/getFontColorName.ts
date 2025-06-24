  export const getColorFromName = (name:string) => {
    const colors = [
      'from-red-400 to-red-600',
      'from-blue-400 to-blue-600',
      'from-green-400 to-green-600',
      'from-purple-400 to-purple-600',
      'from-pink-400 to-pink-600',
      'from-indigo-400 to-indigo-600',
      'from-yellow-400 to-yellow-600',
      'from-teal-400 to-teal-600'
    ];
    const index = name?.charCodeAt(0) % colors.length || 0;
    return colors[index];
  };