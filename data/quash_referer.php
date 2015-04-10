<?php /*

 ocPortal
 Copyright (c) ocProducts, 2004-2012

 See text/EN/licence.txt for full licencing information.


 NOTE TO PROGRAMMERS:
   Do not edit this file. If you need to make changes, save your changed file to the appropriate *_custom folder
   **** If you ignore this advice, then your website upgrades (e.g. for bug fixes) will likely kill your changes ****

*/

/**
 * @license		http://opensource.org/licenses/cpal_1.0 Common Public Attribution License
 * @copyright	ocProducts Ltd
 * @package		core
 */

$target=$_GET['url'];
$target=str_replace(chr(13),'',$target);
$target=str_replace(chr(10),'',$target);

// Only allows redirections from our own server
$OUR_SERVER='http://'.$_SERVER['HTTP_HOST'];
if (substr($_SERVER['HTTP_REFERER'],0,strlen($OUR_SERVER))==$OUR_SERVER) header('Location: '.$target);


