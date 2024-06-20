import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment(){
        onDeleteComment(content)
    }

	return (
		<div className={styles.comment}>
			<Avatar
                hasBorder={false}
				src="https://avatars.githubusercontent.com/u/104018176?v=4"
				alt=""
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kahuna</strong>
                            <time title="17 de junho às 17:33h" dateTime="2024-06-17 17:33:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>

                
			</div>

			<footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>

            </div>
		</div>
	);
}
