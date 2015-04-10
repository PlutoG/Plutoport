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

class Hook_rss_cedi
{

	/**
	 * Standard modular run function for RSS hooks.
	 *
	 * @param  string			A list of categories we accept from
	 * @param  TIME			Cutoff time, before which we do not show results from
	 * @param  string			Prefix that represents the template set we use
	 * @set    RSS_ ATOM_
	 * @param  string			The standard format of date to use for the syndication type represented in the prefix
	 * @param  integer		The maximum number of entries to return, ordering by date
	 * @return ?array			A pair: The main syndication section, and a title (NULL: error)
	 */
	function run($_filters,$cutoff,$prefix,$date_string,$max)
	{
		if (!addon_installed('cedi')) return NULL;

		if (!has_actual_page_access(get_member(),'cedi')) return NULL;

		$filters=ocfilter_to_sqlfragment($_filters,'id','seedy_children','parent_id','parent_id','child_id');

		$content=new ocp_tempcode();
		$rows=$GLOBALS['SITE_DB']->query('SELECT * FROM '.$GLOBALS['SITE_DB']->get_table_prefix().'seedy_pages WHERE '.$filters.' AND add_date>'.strval((integer)$cutoff).' ORDER BY add_date DESC',$max);
		foreach ($rows as $row)
		{
			$id=strval($row['id']);

			if (!has_category_access(get_member(),'seedy_page',strval($id))) continue;

			$author='';

			$news_date=date($date_string,$row['add_date']);
			$edit_date='';

			$news_title=xmlentities(escape_html(get_translated_text($row['title'])));
			$_summary=get_translated_tempcode($row['description']);
			$summary=xmlentities($_summary->evaluate());
			$news='';

			$category='';
			$category_raw='';

			$view_url=build_url(array('page'=>'cedi','type'=>'misc','id'=>($row['id']==db_get_first_id())?NULL:$row['id']),get_module_zone('cedi'),NULL,false,false,true);

			$if_comments=new ocp_tempcode();

			$content->attach(do_template($prefix.'ENTRY',array('VIEW_URL'=>$view_url,'SUMMARY'=>$summary,'EDIT_DATE'=>$edit_date,'IF_COMMENTS'=>$if_comments,'TITLE'=>$news_title,'CATEGORY_RAW'=>$category_raw,'CATEGORY'=>$category,'AUTHOR'=>$author,'ID'=>$id,'NEWS'=>$news,'DATE'=>$news_date)));
		}

		require_lang('cedi');
		return array($content,do_lang('CEDI_POSTS'));
	}

}


