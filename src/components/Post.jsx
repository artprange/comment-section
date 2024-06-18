import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<Avatar
						hasBorder
						className={styles.avatar}
						src="https://avatars.githubusercontent.com/u/90359942?v=4"
						alt=""
					/>
					<div className={styles.authorInfo}>
						<strong>Léo</strong>
						<span>Web Dev</span>
					</div>
				</div>
				<time
					title="17 de junho às 17:33h"
					dateTime="2024-06-17 17:33:00"
				>
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
			
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
