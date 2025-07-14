{{- define "user-services.fullname" -}}
{{- printf "%s" .Release.Name -}}
{{- end -}}

{{- define "user-services.name" -}}
{{ .Chart.Name }}
{{- end -}}

{{- define "user-services.labels" -}}
app.kubernetes.io/name: {{ include "user-services.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}
