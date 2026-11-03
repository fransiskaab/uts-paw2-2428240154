const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    message: 'Route tidak ditemukan'
  });
};

const errorHandler = (err, req, res, next) => {

  // JSON tidak valid
  if (err instanceof SyntaxError && err.status === 400) {
    return res.status(400).json({
      message: 'Format JSON tidak valid'
    });
  }

  // ID MongoDB salah format
  if (err.name === 'CastError') {
    return res.status(400).json({
      message: 'ID tidak valid'
    });
  }

  // Validasi schema
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      message: 'Data tidak valid',
      detail: Object.values(err.errors).map(
        item => item.message
      )
    });
  }

  // Data unik sudah digunakan
  if (err.code === 11000) {
    return res.status(409).json({
      message: 'Data unik sudah digunakan'
    });
  }

  // Error lainnya
  return res.status(500).json({
    message: 'Terjadi kesalahan pada server'
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};