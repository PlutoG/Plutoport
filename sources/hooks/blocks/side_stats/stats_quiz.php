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
 * @package		quizzes
 */

class Hook_stats_quiz
{

	/**
	 * Standard modular run function.
	 *
	 * @return tempcode	The result of execution.
	 */
	function run()
	{
		if (!addon_installed('quizzes')) return new ocp_tempcode();

		require_lang('quiz');

		$bits=new ocp_tempcode();
		if (get_option('quiz_show_stats_count_total_open',true)=='1') $bits->attach(do_template('BLOCK_SIDE_STATS_SUBLINE',array('KEY'=>do_lang_tempcode('QUIZZES'),'VALUE'=>integer_format($GLOBALS['SITE_DB']->query_value('quizzes','COUNT(*)')))));
		if ($bits->is_definitely_empty()) return new ocp_tempcode();
		$section=do_template('BLOCK_SIDE_STATS_SECTION',array('SECTION'=>do_lang_tempcode('QUIZZES'),'CONTENT'=>$bits));

		return $section;
	}

}


