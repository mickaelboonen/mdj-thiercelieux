# DICTIONNAIRE DES DONNÉES

## Table `user`

| CHAMP | TYPE | SPÉCIFICITÉS | COMMENTAIRE |
| -- | -- | -- | -- |
| id | INT | UNSIGNED NOT NULL AUTO_INCREMENT | Identifiant de l'utilisateur |
| pseudo | VARCHAR | NOT NULL | Pseudo de l'utilisateur |
| password | VARCHAR | NOT NULL | Mot de passe de l'utilisateur |
| role | VARCHAR | NOT NULL DEFAULT 'user'| Role  de l'utilisateur. Par défaut, il est configuré sur `user` |
| status | TINYINT | NOT NULL DEFAULT '1' | Statut de l'utilisateur. Par défaut il est configuré sur `1`, ce qui veut dire que l'utilisateur a un compet actif. S'il est sur 0, ça veut dire que l'utilisateur a été désactivé. |
| created_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la création de l'utilisateur  |
| updated_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la modification de l'utilisateur |

## Table `stat`

| CHAMP | TYPE | SPÉCIFICITÉS | COMMENTAIRE |
| -- | -- | -- | -- |
| id | INT | NOT NULL UNSIGNED AUTO_INCREMENT | Identifiant de la ligne de statistiques |
| user_id | INT | NOT NULL | Clé étrangère liant les statistiques à un joueur |
| hosted_parties | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été Maître du Jeu |
| played_parties | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été joueur |
| won_parties | INT | NOT NULL DEFAULT '0' | Nombre de parties que l'utilisateur a gagné |
| won_as_village | INT | NOT NULL DEFAULT '0' | Nombre de parties que l'utilisateur a gagné en étant Villageois |
| won_as_werewolf | INT | NOT NULL DEFAULT '0' | Nombre de parties que l'utilisateur a gagné en étant Loup-Garou |
| won_as_solo | INT | NOT NULL DEFAULT '0' | Nombre de parties que l'utilisateur a gagné en étant un Solitaire |
| won_as_lovers | INT | NOT NULL DEFAULT '0' | Nombre de parties que l'utilisateur a gagné en étant amoureux |
| death_by_werewolf | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été tué par un Loup-Garou |
| death_by_hunter | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été tué par le Chasseur |
| death_by_witch | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été tué par la Sorcière |
| death_by_vote | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur a été tué par les Villageois lors du vote |
| death_by_love | INT | NOT NULL DEFAULT '0' | Nombre de parties où l'utilisateur est mort à cause d'un chagrin d'amour |
| created_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la création des statistiques de l'utilisateur  |
| updated_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la modification des statistiques de l'utilisateur |

## Table `badge`

| CHAMP | TYPE | SPÉCIFICITÉS | COMMENTAIRE |
| -- | -- | -- | -- |
| id | INT | UNSIGNED NOT NULL AUTO_INCREMENT | Identifiant du Badge |
| name | VARCHAR | NOT NULL | Nom du Badge |
| description | VARCHAR | NOT NULL | Description du Badge |
| picture | VARCHAR | NOT NULL | Image du Badge |
| created_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la création du badge  |
| updated_at | TIMESTAMP | NOT NULL DEFAULT NOW() | Date et Heure de la modification du badge |

## Table `user_badge`

| CHAMP | TYPE | SPÉCIFICITÉS | COMMENTAIRE |
| -- | -- | -- | -- |
| user_id | INT | NOT NULL | Clé étrangère de l'utilisateur |
| badge_id | INT | NOT NULL  | Clé étrangère du badge |
