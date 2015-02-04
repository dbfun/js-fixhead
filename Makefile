#
# Targets
#

.PHONY: all css download
all: css

#
# CSS
#

CSS_SRC_FILES=$(shell find $(src-css) -type f -name '*.styl')

css: css/fixhead.css

css/fixhead.css: src-css/js-fixhead.styl $(CSS_SRC_FILES)
	cd src-css; cat js-fixhead.styl | stylus > ../css/fixhead.css

download: download/fixhead.tar.gz

download/fixhead.tar.gz: css
	@echo TODO