import styles from "./styles.module.css";
import {
	ChevronUp,
	ChevronsUp,
	ChevronDown,
	ChevronsDown,
	RotateCcw,
	Hash,
} from "react-feather";

function Counter() {
	/* 
	Resolve o seguinte problema com recurso ao useState
	Deves criar um estado que armazene um valor dinamico e execute as seguintes acções:

	O primeiro botão deve incrementar o contador em 1.
	O segundo botão deve incrementar o contador em 10.
	O terceiro botão deve reiniciar o contador (0).
	O quarto botão deve modificar o contador para um valor aleatorio entre 1 e 1000. (Math.random())
	O quinto botão deve subtrair o contador em 10.
	O sexto botão deve subtrair o contador em 1.
	*/

	return (
		<div className={styles.wrapper}>
			<p className={styles.text}>
				<span>Contador:</span>
				<span className={styles.count}>
					⚠️ Inserir aqui valor do contador ⚠️
				</span>
			</p>
			<div className={styles.button_row}>
				<button className={styles.btn}>
					<ChevronUp />
				</button>
				<button className={styles.btn}>
					<ChevronsUp />
				</button>
				<button className={styles.btn}>
					<RotateCcw />
				</button>
				<button className={styles.btn}>
					<Hash />
				</button>
				<button className={styles.btn}>
					<ChevronsDown />
				</button>
				<button className={styles.btn}>
					<ChevronDown />
				</button>
			</div>
		</div>
	);
}

export default Counter;
