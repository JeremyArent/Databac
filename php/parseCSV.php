<?php
//Académie Lib L;Diplôme regroupé Lib L;Département Lib L;Série du baccalauréat Lib L;Nombre total d'admis;Nombre de présents;Série du baccalauréat Lib C;Sexe;Session;Situation déclarée candidat;Secteur d'enseignement;Contrat de l'établissement;TAUX DE REUSSITE (col E / col F * 100)
	ini_set("auto_detect_line_endings", true);
		set_time_limit(60);
	$f = fopen('C:\\wamp\\www\\Databac\\data\\Classeur1.csv', 'r');
	if($f){
		$out = array();
		$cols = fgetcsv($f, 1000, ';');
		while(($r = fgetcsv($f, 1000, ';')) !== false){
			if(!isset($out[$r[0]]))
				$out[$r[0]] = array();

			if(!isset($out[ $r[0] ][ $r[8] ]))
				$out[ $r[0] ][ $r[8] ] = array();

			if(!is_numeric($r[4]) || !is_numeric($r[5]))
				continue;

			$out[ $r[0] ][ $r[8] ][] = array(
				'academie' => $r[0],
				'diplome' => $r[1],
				'departement' => $r[2],
				'serie_name' => $r[3],
				'admis' => (int)$r[4],
				'presents' => (int)$r[5],
				'serie' => str_replace('BAC ', '', $r[6]),
				'sexe' => $r[7],
				'session' => $r[8],
				'pc' => (float)$r[12]
			);
			echo '.';
		}
		
		file_put_contents('C:\\wamp\\www\\Databac\\js\\json.json', json_encode($out));
		fclose($f);
	}
	else{

		die('MABITE');
	}
?>