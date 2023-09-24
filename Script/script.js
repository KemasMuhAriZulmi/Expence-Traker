// Data transaksi dalam bentuk objek
const riwayat = [
    {
      id: 1,
      type: 'income',
      nominal: 1000,
      note: 'Gaji',
      date: '2023-09-24'
    },
    {
      id: 2,
      type: 'expense',
      nominal: 500,
      note: 'Makan siang',
      date: '2023-09-24'
    },
    {
      id: 3,
      type: 'income',
      nominal: 200,
      note: 'Bonus',
      date: '2023-09-24'
    }
  ];
  
  // Function untuk menghitung total uang masuk, uang keluar, dan sisa uang
  function keuangan(transaksi) {
    let totalIncome = 0;
    let totalExpense = 0;
    transaksi.forEach(val => {
      if (val.type === 'income') {
        totalIncome += val.nominal;
      } else if (val.type === 'expense') {
        totalExpense += val.nominal;
      }
    });

    const saldo = totalIncome - totalExpense;
  
    return {
      totalIncome,
      totalExpense,
      saldo
    };
  }
  
  // Memanggil function dan menampilkan hasil
  const finances = keuangan(riwayat);
  alert(`Total uang masuk : ${finances.totalIncome}\ntotal uang Keluar : ${finances.totalExpense}\nSisa uang : ${finances.saldo}\n`)
  
 

  
  
