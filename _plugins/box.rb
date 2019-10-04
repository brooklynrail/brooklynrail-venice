module Jekyll
  class RenderContentBox < Liquid::Block

    def render(context)
      text = super
      site = context.registers[:site]
      converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
      "<div class='box box-event margin-bottom-5 padding-y-2 bg-base-lightest padding-105 tablet:padding-3 font-sans-sm tablet:font-sans-md display-inline-block radius-sm'>" + converter.convert(text) + "</div>"
    end

  end
end

Liquid::Template.register_tag('box', Jekyll::RenderContentBox)
