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
 * @package		core_configuration
 */

class Hook_addon_registry_core_configuration
{
	/**
	 * Get a list of file permissions to set
	 *
	 * @return array			File permissions to set
	 */
	function get_chmod_array()
	{
		return array();
	}

	/**
	 * Get the version of ocPortal this addon is for
	 *
	 * @return float			Version number
	 */
	function get_version()
	{
		return ocp_version_number();
	}

	/**
	 * Get the description of the addon
	 *
	 * @return string			Description of the addon
	 */
	function get_description()
	{
		return 'Set configuration options.';
	}

	/**
	 * Get a mapping of dependency types
	 *
	 * @return array			File permissions to set
	 */
	function get_dependencies()
	{
		return array(
			'requires'=>array(),
			'recommends'=>array(),
			'conflicts_with'=>array()
		);
	}

	/**
	 * Get a list of files that belong to this addon
	 *
	 * @return array			List of files
	 */
	function get_file_list()
	{
		return array(
			'sources/hooks/systems/config_default/check_broken_urls.php',
			'sources/hooks/systems/config_default/google_analytics.php',
			'sources/hooks/systems/config_default/ocp_show_personal_sub_links.php',
			'sources/hooks/systems/config_default/show_content_tagging.php',
			'sources/hooks/systems/config_default/show_content_tagging_inline.php',
			'sources/hooks/systems/config_default/show_screen_actions.php',
			'sources/hooks/systems/config_default/allow_audio_videos.php',
			'sources/hooks/systems/config_default/allow_ext_images.php',
			'sources/hooks/systems/config_default/allowed_post_submitters.php',
			'sources/hooks/systems/config_default/anti_leech.php',
			'sources/hooks/systems/config_default/auto_submit_sitemap.php',
			'sources/hooks/systems/config_default/automatic_meta_extraction.php',
			'sources/hooks/systems/config_default/bcc.php',
			'sources/hooks/systems/config_default/bottom_show_admin_menu.php',
			'sources/hooks/systems/config_default/bottom_show_feedback_link.php',
			'sources/hooks/systems/config_default/bottom_show_rules_link.php',
			'sources/hooks/systems/config_default/bottom_show_privacy_link.php',
			'sources/hooks/systems/config_default/bottom_show_sitemap_button.php',
			'sources/hooks/systems/config_default/bottom_show_top_button.php',
			'sources/hooks/systems/config_default/captcha_noise.php',
			'sources/hooks/systems/config_default/captcha_on_feedback.php',
			'sources/hooks/systems/config_default/cc_address.php',
			'sources/hooks/systems/config_default/closed.php',
			'sources/hooks/systems/config_default/comment_text.php',
			'sources/hooks/systems/config_default/comments_forum_name.php',
			'sources/hooks/systems/config_default/copyright.php',
			'sources/hooks/systems/config_default/deeper_admin_breadcrumbs.php',
			'sources/hooks/systems/config_default/description.php',
			'sources/hooks/systems/config_default/detect_lang_browser.php',
			'sources/hooks/systems/config_default/detect_lang_forum.php',
			'sources/hooks/systems/config_default/display_php_errors.php',
			'sources/hooks/systems/config_default/eager_wysiwyg.php',
			'sources/hooks/systems/config_default/enable_https.php',
			'sources/hooks/systems/config_default/enable_keyword_density_check.php',
			'sources/hooks/systems/config_default/enable_markup_validation.php',
			'sources/hooks/systems/config_default/enable_previews.php',
			'sources/hooks/systems/config_default/enable_spell_check.php',
			'sources/hooks/systems/config_default/enveloper_override.php',
			'sources/hooks/systems/config_default/force_meta_refresh.php',
			'sources/hooks/systems/config_default/forum_in_portal.php',
			'sources/hooks/systems/config_default/forum_show_personal_stats_posts.php',
			'sources/hooks/systems/config_default/forum_show_personal_stats_topics.php',
			'sources/hooks/systems/config_default/global_donext_icons.php',
			'sources/hooks/systems/config_default/gzip_output.php',
			'sources/hooks/systems/config_default/has_low_memory_limit.php',
			'sources/hooks/systems/config_default/htm_short_urls.php',
			'sources/hooks/systems/config_default/ip_forwarding.php',
			'sources/hooks/systems/config_default/ip_strict_for_sessions.php',
			'sources/hooks/systems/config_default/is_on_comcode_page_children.php',
			'sources/hooks/systems/config_default/is_on_comments.php',
			'sources/hooks/systems/config_default/is_on_emoticon_choosers.php',
			'sources/hooks/systems/config_default/is_on_gd.php',
			'sources/hooks/systems/config_default/is_on_preview_validation.php',
			'sources/hooks/systems/config_default/is_on_rating.php',
			'sources/hooks/systems/config_default/is_on_strong_forum_tie.php',
			'sources/hooks/systems/config_default/is_on_trackbacks.php',
			'sources/hooks/systems/config_default/java_ftp_host.php',
			'sources/hooks/systems/config_default/java_ftp_path.php',
			'sources/hooks/systems/config_default/java_password.php',
			'sources/hooks/systems/config_default/java_upload.php',
			'sources/hooks/systems/config_default/java_username.php',
			'sources/hooks/systems/config_default/keywords.php',
			'sources/hooks/systems/config_default/log_php_errors.php',
			'sources/hooks/systems/config_default/low_space_check.php',
			'sources/hooks/systems/config_default/main_forum_name.php',
			'sources/hooks/systems/config_default/max_download_size.php',
			'sources/hooks/systems/config_default/max_image_size.php',
			'sources/hooks/systems/config_default/maximum_users.php',
			'sources/hooks/systems/config_default/mod_rewrite.php',
			'sources/hooks/systems/config_default/no_bot_stats.php',
			'sources/hooks/systems/config_default/no_stats_when_closed.php',
			'sources/hooks/systems/config_default/ocf_show_profile_link.php',
			'sources/hooks/systems/config_default/ocp_show_avatar.php',
			'sources/hooks/systems/config_default/ocp_show_conceded_mode_link.php',
			'sources/hooks/systems/config_default/ocp_show_personal_adminzone_link.php',
			'sources/hooks/systems/config_default/ocp_show_personal_last_visit.php',
			'sources/hooks/systems/config_default/ocp_show_personal_usergroup.php',
			'sources/hooks/systems/config_default/ocp_show_staff_page_actions.php',
			'sources/hooks/systems/config_default/ocp_show_su.php',
			'sources/hooks/systems/config_default/root_zone_login_theme.php',
			'sources/hooks/systems/config_default/send_error_emails_ocproducts.php',
			'sources/hooks/systems/config_default/session_expiry_time.php',
			'sources/hooks/systems/config_default/show_docs.php',
			'sources/hooks/systems/config_default/show_inline_stats.php',
			'sources/hooks/systems/config_default/show_post_validation.php',
			'sources/hooks/systems/config_default/simplified_donext.php',
			'sources/hooks/systems/config_default/site_closed.php',
			'sources/hooks/systems/config_default/site_name.php',
			'sources/hooks/systems/config_default/site_scope.php',
			'sources/hooks/systems/config_default/smtp_from_address.php',
			'sources/hooks/systems/config_default/smtp_sockets_host.php',
			'sources/hooks/systems/config_default/smtp_sockets_password.php',
			'sources/hooks/systems/config_default/smtp_sockets_port.php',
			'sources/hooks/systems/config_default/smtp_sockets_use.php',
			'sources/hooks/systems/config_default/smtp_sockets_username.php',
			'sources/hooks/systems/config_default/ssw.php',
			'sources/hooks/systems/config_default/staff_address.php',
			'sources/hooks/systems/config_default/thumb_width.php',
			'sources/hooks/systems/config_default/unzip_cmd.php',
			'sources/hooks/systems/config_default/unzip_dir.php',
			'sources/hooks/systems/config_default/use_contextual_dates.php',
			'sources/hooks/systems/config_default/use_security_images.php',
			'sources/hooks/systems/config_default/user_postsize_errors.php',
			'sources/hooks/systems/config_default/users_online_time.php',
			'sources/hooks/systems/config_default/valid_images.php',
			'sources/hooks/systems/config_default/valid_types.php',
			'sources/hooks/systems/config_default/validation.php',
			'sources/hooks/systems/config_default/validation_compat.php',
			'sources/hooks/systems/config_default/validation_css.php',
			'sources/hooks/systems/config_default/validation_ext_files.php',
			'sources/hooks/systems/config_default/validation_javascript.php',
			'sources/hooks/systems/config_default/validation_wcag.php',
			'sources/hooks/systems/config_default/validation_xhtml.php',
			'sources/hooks/systems/config_default/website_email.php',
			'sources/hooks/systems/config_default/long_google_cookies.php',
			'sources/hooks/systems/config_default/detect_javascript.php',
			'sources/hooks/systems/config_default/welcome_message.php',
			'sources/hooks/systems/config_default/remember_me_by_default.php',
			'sources/hooks/systems/config_default/mobile_support.php',
			'sources/hooks/systems/addon_registry/core_configuration.php',
			'CONFIG_CATEGORY_SCREEN.tpl',
			'CONFIG_GROUP.tpl',
			'adminzone/pages/modules/admin_config.php',
			'themes/default/images/bigicons/config.png',
			'themes/default/images/pagepics/config.png',
			'lang/EN/config.ini',
			'sources/hooks/systems/config_default/.htaccess',
			'sources/hooks/systems/config_default/index.html',
			'XML_CONFIG_SCREEN.tpl'
		);
	}


	/**
	 * Get mapping between template names and the method of this class that can render a preview of them
	 *
	 * @return array			The mapping
	 */
	function tpl_previews()
	{
		return array(
			'CONFIG_GROUP.tpl'=>'administrative__config_category_screen',
			'CONFIG_CATEGORY_SCREEN.tpl'=>'administrative__config_category_screen',
			'XML_CONFIG_SCREEN.tpl'=>'administrative__xml_config_screen'
		);
	}

	/**
	 * Get a preview(s) of a (group of) template(s), as a full standalone piece of HTML in Tempcode format.
	 * Uses sources/lorem.php functions to place appropriate stock-text. Should not hard-code things, as the code is intended to be declaritive.
	 * Assumptions: You can assume all Lang/CSS/Javascript files in this addon have been pre-required.
	 *
	 * @return array			Array of previews, each is Tempcode. Normally we have just one preview, but occasionally it is good to test templates are flexible (e.g. if they use IF_EMPTY, we can test with and without blank data).
	 */
	function tpl_preview__administrative__config_category_screen()
	{
		$groups=new ocp_tempcode();

		foreach (placeholder_array() as $k=>$group)
		{
			$group=do_lorem_template('CONFIG_GROUP', array(
				'GROUP_DESCRIPTION'=>lorem_word(),
				'GROUP_NAME'=>$group,
				'GROUP'=>placeholder_fields(),
				'CURRENT_GROUP'=>"ID$k"
			));
			$groups->attach($group->evaluate());
		}

		return array(
			lorem_globalise(do_lorem_template('CONFIG_CATEGORY_SCREEN', array(
				'CATEGORY_DESCRIPTION'=>lorem_word_2(),
				'_GROUPS'=>placeholder_array(),
				'PING_URL'=>placeholder_url(),
				'WARNING_DETAILS'=>'',
				'TITLE'=>lorem_title(),
				'URL'=>placeholder_url(),
				'GROUPS'=>$groups,
				'SUBMIT_NAME'=>lorem_word()
			)), NULL, '', true)
		);
	}

	/**
	 * Get a preview(s) of a (group of) template(s), as a full standalone piece of HTML in Tempcode format.
	 * Uses sources/lorem.php functions to place appropriate stock-text. Should not hard-code things, as the code is intended to be declaritive.
	 * Assumptions: You can assume all Lang/CSS/Javascript files in this addon have been pre-required.
	 *
	 * @return array			Array of previews, each is Tempcode. Normally we have just one preview, but occasionally it is good to test templates are flexible (e.g. if they use IF_EMPTY, we can test with and without blank data).
	 */
	function tpl_preview__administrative__xml_config_screen()
	{
		return array(
			lorem_globalise(do_lorem_template('XML_CONFIG_SCREEN', array(
				'XML'=>'<test />',
				'POST_URL'=>placeholder_url(),
				'TITLE'=>lorem_title()
			)), NULL, '', true)
		);
	}
}
