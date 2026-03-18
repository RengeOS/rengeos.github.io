// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
// https://astro.build/config
export default defineConfig({
	site: 'https://rengeos.github.io',
	base: '/rengeos-docs',
	integrations: [
		starlight({
			title: 'RengeOS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RengeOS' }],
			plugins: [
       		      starlightThemeGalaxy()
      			 ],
			logo: {
        			src: './public/RengeOS-logo.svg',
			replacesTitle: false,
      			},
			favicon: './favicon.ico',
			lastUpdated: true,
			customCss: [
        			'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introduction',
					items:[
						{ label: 'Overview', slug: 'introduction/overview' },
					],
					collapsed: false,
				},
				{
					label: 'Getting Started',
					items:[
						{ label: 'Getting an ISO', slug: 'getting-started/getting-an-iso' },
						{ label: 'Create Bootable USB', slug: 'getting-started/create-bootable-usb' },
					],
					collapsed: false,
				},
				{
					label: 'Installation',
					items: [
						{ label: 'Minimal ISO Installation', slug: 'installation/minimal-iso-installation'},
						{ label: 'NiriWM ISO Installation', slug: 'installation/niriwm-iso-installation'},
					],
					collapsed: false,
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'NiriWM Edition', slug: 'configuration/niriwm-edition'},
						{ label: 'Change GRUB Theme', slug:'configuration/change-grub-theme'},
						{ label: 'Enable Bcachefs Rollback', slug: 'configuration/enable-bcachefs-rollback'},
						{ label: 'Enable Compatibility Rollback', slug: 'configuration/enable-compatibility-rollback'},
						{ label: 'ROS-Reborn (Recovery Mode)', slug: 'configuration/ros-reborn'},
						{ label: 'ROS-Reborn-System-OTA (Recovery Mode)', slug: 'configuration/ros-reborn-system-ota'},
					],
					collapsed: false,
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Release Notes', slug: 'reference/release-notes'},
						{ label: 'Credits', slug: 'reference/credits'},
					],
					collapsed: false,
				},
			],
		}),
	],
});
