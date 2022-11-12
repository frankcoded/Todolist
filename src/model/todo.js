class Model {
    constructor() { }
  
    todos = {
      1: {
        id: 1,
        title: 'Outside',
        text: 'Running',
        complete: false,
        tasks: {
          1: { id: 1, text: 'Run a marathon', complete: false },
          2: { id: 2, text: 'Run with freinds', complete: false }
        }
      },
      2: {
        id: 2,
        title: 'Garden',
        text: 'Plant',
        complete: false,
        tasks: {
          1: { id: 1, text: 'Plant a garden', complete: false },
          2: { id: 2, text: 'Water the garden', complete: false }
        }
  
  
      }
    }
}