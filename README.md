# Maze Generator

Un generatore di labirinti animato, realizzato con JavaScript e [p5.js](https://p5js.org/), che utilizza l'algoritmo **Recursive Backtracker** (ricerca in profondità con stack).

🔗 **Demo live:** https://alexsantini10.github.io/maze-generator/

---

## Come funziona

Il labirinto viene generato seguendo la teoria dei grafi: la griglia di celle viene trattata come un grafo connesso in cui ogni nodo (cella) ha fino a 4 nodi adiacenti (in alto, a destra, in basso, a sinistra).

L'algoritmo utilizzato è il **Recursive Backtracker (DFS con stack)**:

1. Si parte dalla cella in alto a sinistra `(0, 0)`.
2. Si sceglie casualmente una cella vicina non ancora visitata e si abbatte il muro tra le due celle.
3. Si continua a esplorare ricorsivamente finché non si raggiunge un vicolo cieco.
4. Si torna indietro tramite lo stack fino a trovare una cella con vicini non visitati.
5. Il processo termina quando tutte le celle sono state visitate.

Il risultato è sempre un **labirinto perfetto**: da ogni cella è possibile raggiungere qualsiasi altra cella tramite un unico percorso.

---

## Tecnologie utilizzate

- **JavaScript (ES5)**
- **[p5.js](https://p5js.org/)** — libreria per grafica e animazioni
- **[Bootstrap 4](https://getbootstrap.com/)** — layout e stile

---

## Struttura del progetto

```
maze-generator/
├── index.html      # Pagina principale con il canvas del labirinto
├── info.html       # Pagina con la descrizione dell'algoritmo
├── sketch.js       # Setup e loop di animazione (p5.js)
├── cell.js         # Classe Cell, classe Wall e funzioni di supporto
├── style.css       # Stili CSS
└── favicon.ico     # Icona del sito
```

---

## Come eseguire in locale

Non è richiesta alcuna installazione. È sufficiente:

1. Clonare il repository:
   ```bash
   git clone https://github.com/AlexSantini10/maze-generator.git
   ```
2. Aprire il file `index.html` in un browser moderno.

---

## Legenda colori

| Colore | Significato |
|--------|-------------|
| 🟪 Viola | Celle già visitate |
| 🟩 Verde | Cella corrente (frontiera dell'esplorazione) |
| ⬜ Bianco | Muri della griglia |
