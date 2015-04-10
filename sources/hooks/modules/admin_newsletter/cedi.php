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
 * @package		cedi
 */

class Hook_whats_news_cedi
{

	/**
	 * Standard modular run function for newsletter hooks.
	 *
	 * @param  TIME				The time that the entries found must be newer than
	 * @param  LANGUAGE_NAME	The language the entries found must be in
	 * @param  string				Category filter to apply
	 * @return array				Tuple of result details
	 */
	function run($cutoff_time,$lang,$filter)
	{
		if (!addon_installed('cedi')) return array();

		unset($filter); // Not used

		require_lang('cedi');

		$new=new ocp_tempcode();

		$rows=$GLOBALS['SITE_DB']->query('SELECT * FROM '.$GLOBALS['SITE_DB']->get_table_prefix().'seedy_pages WHERE add_date>'.strval((integer)$cutoff_time).' ORDER BY add_date DESC',300);
		if (count($rows)==300) return array();
		foreach ($rows as $row)
		{
			$_url=build_url(array('page'=>'cedi','type'=>'misc','id'=>$row['id']),get_module_zone('cedi'),NULL,false,false,true);
			$url=$_url->evaluate();
			$name=get_translated_text($row['title'],NULL,$lang);
			$description=get_translated_text($row['description'],NULL,$lang);
			$member_id=NULL;
			$new->attach(do_template('NEWSLETTER_NEW_RESOURCE_FCOMCODE',array('_GUID'=>'29571e3829c6723b2ca946436a6cadb2','MEMBER_ID'=>$member_id,'URL'=>$url,'NAME'=>$name,'DESCRIPTION'=>$description)));
		}

		return array($new,do_lang('CEDI','','','',$lang));
	}

}


