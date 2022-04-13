<?php

/***************************************************************************\
 *  SPIP, Systeme de publication pour l'internet                           *
 *                                                                         *
 *  Copyright (c) 2001-2017                                                *
 *  Arnaud Martin, Antoine Pitrou, Philippe Riviere, Emmanuel Saint-James  *
 *                                                                         *
 *  Ce programme est un logiciel libre distribue sous licence GNU/GPL.     *
 *  Pour plus de details voir le fichier COPYING.txt ou l'aide en ligne.   *
\***************************************************************************/

if (!defined('_ECRIRE_INC_VERSION')) {
	return;
}
		include_spip('base/connect_sql');
		include_spip('inc/filtres_ecrire');
		include_spip('inc/filtres');
		include_spip('inc/utils');
		include_spip('inc/json');
 
 include_spip('exec/model/claseapi');
		switch ($_POST['opcion']) {
		case 'consultar':
			
			$query='';
			$tbl='categorias';
			$select='*';
			$app=new Apis($tbl);
			$row=$app->consultadatos($query,$select);
			
			if (!is_null($row)) {
			$var = var2js($row);	
			echo $var;
			}else{

			$records[] = array(
                                'id'=>1,
                                'categoria'=>'Aun no existen categorias cargadas'
                            );
					
				$var = var2js($records);	
				echo $var;					
			}
			
			break;
			case 'guardar':
					$chartic=array();
					//LLAMO LA TABLA
					$tbl_categorias='categorias';
					
					//LA ASIGNO A LA CLASE
					$categ=new Apis($tbl_categorias);
					//CARGO EL ARRAY
					$chartic['categoria']=$_POST['categoria'];
					//GUARDO
					$id=$categ->guardar($chartic);
					
					//VERIFICO
						if($id>0){
								$msg[] = array('id'=>1,'menssage'=>'Categoría guardada con exito!!');
						}else{
								$msg[] = array('menssage'=>'ERROR. La Categoría no se pudo guardar!');
						}
				//IMPRIMO RESPUESTA		
				$var = var2js($msg);	
				echo $var;
			break;
			case 'actualizar':
					$chartic=array();
					//LLAMO LA TABLA
					$tbl_categorias='categorias';
											
						$apps=new Apis($tbl_categorias);
						$chartic['categoria']=$_POST['categoria'];
						$chartic['status']=$_POST['status'];
						$apps->actualizar($chartic,'id',$_POST['id']);
						$msg[] = array('menssage'=>'OK. La Categoría: '.$_POST['categoria'].' fue actualizado correctamente!');
						$var = var2js($msg);	
						echo $var;				
			
			break;
			case 'eliminar':
			
			break;
			
		}

													
?>
